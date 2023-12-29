<?php

namespace App\Http\Controllers\API\V1;

use Carbon\Carbon;
use Stripe\Stripe;
use App\Models\Transaction;
use App\Models\Subscription;
use Illuminate\Http\Request;
use App\Models\MembershipPlan;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use App\Repositories\StripeRepository;
use Illuminate\Support\Facades\Session;
use Stripe\Exception\ApiErrorException;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\AppBaseController;

/**
 * Class StripeApiController
 */
class StripeApiController extends AppBaseController
{
    /**
     * @var StripeRepository
     */
    private $stripeRepository;

    public function __construct(StripeRepository $stripeRepository)
    {
        $this->stripeRepository = $stripeRepository;
    }

    /**
     * @param $id
     *
     * @throws ApiErrorException
     *
     * @throws \JsonException
     * @return JsonResponse
     */
    public function createSession($id): JsonResponse
    {
        /** @var MembershipPlan $plan */
        $plan = MembershipPlan::whereId($id)->firstOrFail();
        $user = Auth::user();
        $stripeKey = getSettingValueByKey('stripe_secret');
        Stripe::setApiKey($stripeKey);
        $data = [
            'plan_id' => $plan->id,
            'member_id' => $user->id,
        ];
        $session = \Stripe\Checkout\Session::create([
            'payment_method_types'       => ['card'],
            'customer_email'             => $user->email,
            'line_items'                 => [
                [
                    'price_data'  => [
                        'product_data' => [
                            'name' => 'BILL OF PLAN ' . $plan->name,
                        ],
                        'unit_amount'  => (getSettingValueByKey('currency') != 'JPY') ? $plan->price * 100 : $plan->price,
                        'currency'     => getSettingValueByKey('currency'),
                    ],
                    'quantity'    => 1,
                    'description' => 'BILL OF PLAN ' . $plan->name,
                ],
            ],
            'billing_address_collection' => 'auto',
            'client_reference_id'        => json_encode($data, JSON_THROW_ON_ERROR),
            'mode'                       => 'payment',
            'success_url'                => url('api/v1/payment-success') . '?session_id={CHECKOUT_SESSION_ID}',
            'cancel_url'                 => url('api/v1/failed-payment?error=payment_cancelled'),
        ]);
        $result = [
            'sessionId' => $session['id'],
        ];

        return $this->sendResponse($result, 'Session created successfully.');
    }

    /**
     * @param Request $request
     *
     * @throws ApiErrorException
     * @throws \JsonException
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function paymentSuccess(Request $request): \Illuminate\Http\RedirectResponse
    {
        $sessionId = $request->get('session_id');
        $this->stripeRepository->paymentSuccess($sessionId);

        return redirect(url("/#/lms/books"));
    }

    /**
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function handleFailedPayment(): \Illuminate\Http\RedirectResponse
    {

        return redirect(url("/#/lms/books"));
    }

    public function RazorPay(Request $request)
    {
        $plan = MembershipPlan::whereId($request->id)->firstOrFail();
        $memberId = Auth::id();

        $data = [
            'member_id'         => $memberId,
            'transaction_id'    => uniqueTransactionId(),
            'plan_id'           => $plan->id,
            'plan_amount'       => $plan->price,
            'deposit'           => $plan->deposit,
            'renewal_price'     => $plan->renewal_price,
            'plan_frequency'    => $plan->frequency,
            'notes'             => $request->get('notes'),
            'reference'         => $request->get('reference'),
            'start_date'        => Carbon::now(),
            'end_date'          => ($plan->frequency === MembershipPlan::YEARLY_FREQUENCY ? Carbon::now()->addYear() : $plan->frequency === MembershipPlan::LIFETIME) ? Carbon::now()->addMillennia(1) : Carbon::now()->addMonth(),
            'status'            => Subscription::ACTIVE,
            'type'              => Subscription::RAZORPAY,
        ];

        Subscription::create($data);

        $user = Auth::user();

        $transactionData = [
            'member_id'      => $memberId,
            'plan_id'        => $plan->id,
            'payment_mode'   => Transaction::TYPE_RAZORPAY,
            'amount'         => $plan->price + $plan->deposit,
            'status'         => 'paid',
        ];
        $transaction = Transaction::create($transactionData);

        /*  DB::commit(); */

        return $this->sendSuccess(['sessionId' => Session::getId(), "user" => $user], 'Subscription Created successfully');
    }
}

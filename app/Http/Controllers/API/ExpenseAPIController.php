<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\AppBaseController;
use App\Http\Requests\CreateExpenseRequest;
use App\Http\Requests\UpdateExpenseRequest;
use App\Http\Resources\ExpenseCollection;
use App\Http\Resources\ExpenseResource;
use App\Models\Expense;
use App\Models\Warehouse;
use App\Repositories\ExpenseRepository;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Prettus\Validator\Exceptions\ValidatorException;

/**
 * Class ExpenseAPIController
 */
class ExpenseAPIController extends AppBaseController
{
    /** @var ExpenseRepository */
    private $expenseRepository;

    public function __construct(ExpenseRepository $expenseRepository)
    {
        $this->expenseRepository = $expenseRepository;
    }

    /**
     * @param Request $request
     *
     * @return ExpenseCollection
     */
    public function index(Request $request)
    {
        // $perPage = getPageSize($request);
        // $expenses = new Expense();

        $input = $request->except(['skip', 'limit']);
        $expenses = $this->expenseRepository->all(
            $input,
            $request->get('skip'),
            $request->get('limit')
        );

        // if ($request->get('warehouse_id')) {
        //     $expenses->where('warehouse_id', $request->get('warehouse_id'));
        // }
        // $search = $request->filter['search'] ?? '';
        // $warehouse = (Warehouse::where('name', 'LIKE', "%$search%")->get()->count() != 0);

        // if ($warehouse) {
        //     $expenses->whereHas('warehouse', function (Builder $q) use ($search, $warehouse) {
        //         if ($warehouse) {
        //             $q->where('title', 'LIKE', "%$search%");
        //         }
        //     });
        // }

        // $expenses = $expenses->where('title', 'LIKE', "%$search%")->orWhere('reference_code', 'LIKE', "%$search%")->paginate($perPage);
        // return $this->sendResponse($expenses, 'hehe');
        ExpenseResource::usingWithCollection();

        return new ExpenseCollection($expenses);



        // return $this->sendResponse(
        //     $genres->toArray(),
        //     [
        //         'message' => 'Genres retrieved successfully.',
        //         'totalRecords' => $this->expenseRepository->all($input)->count()
        //     ]
        // );
    }

    /**
     * @param CreateExpenseRequest $request
     *
     * @return ExpenseResource
     */
    public function store(CreateExpenseRequest $request)
    {
        $input = $request->all();
        $expense = $this->expenseRepository->storeExpense($input);

        return new ExpenseResource($expense);
    }

    /**
     * @param $id
     *
     * @return ExpenseResource
     */
    public function show($id)
    {
        $expense = $this->expenseRepository->find($id);

        return new ExpenseResource($expense);
    }

    /**
     * @param UpdateExpenseRequest $request
     * @param $id
     *
     * @throws ValidatorException
     *
     * @return ExpenseResource
     */
    public function update(UpdateExpenseRequest $request, $id)
    {
        $input = $request->all();
        $expense = $this->expenseRepository->update($input, $id);

        return new ExpenseResource($expense);
    }

    /**
     * @param $id
     *
     * @return JsonResponse
     */
    public function destroy($id)
    {
        $this->expenseRepository->delete($id);

        return $this->sendSuccess('Expense deleted successfully');
    }
}

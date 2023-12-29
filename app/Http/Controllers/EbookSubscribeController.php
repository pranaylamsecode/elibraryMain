<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EbookLimitModel;
use App\Models\EbookLimitModel2;
use App\Models\EbookLimitModel3;
use App\Models\EbookSubscription;
use App\Models\EbookSubscription2;
use App\Models\EbookSubscription3;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use App\Models\User;
use App\Models\User2;
use App\Models\User3;

class EbookSubscribeController extends Controller
{
    public function index()
    {

        $esub = EbookSubscription::all()->toArray();
        $esub2 = EbookSubscription2::all()->toArray();
        $esub3 = EbookSubscription3::all()->toArray();

        $esub = array_merge($esub, $esub2, $esub3);

        $amount = array_map(function ($item) {
            return $item["amount"];
        }, $esub);

        $esub = array_merge($esub, $esub2, $esub3);

        $amount = array_map(function ($item) {
            return $item["amount"];
        }, $esub);

        return response()->json([
            'data' => $esub,
            'message' => "Ebook Subscription Fetched Successfully",
            'totalAmount' => array_sum($amount),
            'member' => Auth::user()
        ]);
    }

    public function subscribe(Request $request)
    {
        $user = Auth::user();
        $user_email = $user['email'];
        $request['email'] = $user_email;
        $library_id = $request->library_id;
        $site_name = Config::get('app.site_url');
        if ($site_name == "http://dindayalupadhyay.smartcitylibrary.com") {
            if ($library_id == "222") {
                $ebook = EbookSubscription2::updateOrCreate(['member_id' => $request->member_id, "ebook_id" => $request->ebook_id], $request->all());
                $book = EbookLimitModel2::where("ebook_id", $request->ebook_id)->first();
                if ($book) {
                    EbookLimitModel2::where("ebook_id", $request->ebook_id)->update(["count" => $book->count + 1]);
                } else {
                    EbookLimitModel2::create(['ebook_id' => $request->ebook_id, 'count' => 1]);
                }
                return response()->json([
                    'data' => $ebook,
                    'message' => !$request->renew ? "Ebook Subscribe Successfully" : "Ebook Renewed Successfully"
                ]);
            } else if ($library_id == 333) {
                $ebook = EbookSubscription3::updateOrCreate(['member_id' => $request->member_id, "ebook_id" => $request->ebook_id], $request->all());
                $book = EbookLimitModel3::where("ebook_id", $request->ebook_id)->first();
                if ($book) {
                    EbookLimitModel3::where("ebook_id", $request->ebook_id)->update(["count" => $book->count + 1]);
                } else {
                    EbookLimitModel3::create(['ebook_id' => $request->ebook_id, 'count' => 1]);
                }
                return response()->json([
                    'data' => $ebook,
                    'message' => !$request->renew ? "Ebook Subscribe Successfully" : "Ebook Renewed Successfully"
                ]);
            } else {
                $ebook = EbookSubscription::updateOrCreate(['member_id' => $request->member_id, "ebook_id" => $request->ebook_id], $request->all());
                $book = EbookLimitModel::where("ebook_id", $request->ebook_id)->first();
                if ($book) {
                    EbookLimitModel::where("ebook_id", $request->ebook_id)->update(["count" => $book->count + 1]);
                } else {
                    EbookLimitModel::create(['ebook_id' => $request->ebook_id, 'count' => 1]);
                }
                return response()->json([
                    'data' => $ebook,
                    'message' => !$request->renew ? "Ebook Subscribe Successfully" : "Ebook Renewed Successfully"
                ]);
            }
        } elseif ($site_name == "http://kundanlalgupta.smartcitylibrary.com") {
            if ($library_id == "111") {
                $ebook = EbookSubscription2::updateOrCreate(['member_id' => $request->member_id, "ebook_id" => $request->ebook_id], $request->all());
                $book = EbookLimitModel2::where("ebook_id", $request->ebook_id)->first();
                if ($book) {
                    EbookLimitModel2::where("ebook_id", $request->ebook_id)->update(["count" => $book->count + 1]);
                } else {
                    EbookLimitModel2::create(['ebook_id' => $request->ebook_id, 'count' => 1]);
                }
                return response()->json([
                    'data' => $ebook,
                    'message' => !$request->renew ? "Ebook Subscribe Successfully" : "Ebook Renewed Successfully"
                ]);
            } else if ($library_id == 333) {
                $ebook = EbookSubscription3::updateOrCreate(['member_id' => $request->member_id, "ebook_id" => $request->ebook_id], $request->all());
                $book = EbookLimitModel3::where("ebook_id", $request->ebook_id)->first();
                if ($book) {
                    EbookLimitModel3::where("ebook_id", $request->ebook_id)->update(["count" => $book->count + 1]);
                } else {
                    EbookLimitModel3::create(['ebook_id' => $request->ebook_id, 'count' => 1]);
                }
                return response()->json([
                    'data' => $ebook,
                    'message' => !$request->renew ? "Ebook Subscribe Successfully" : "Ebook Renewed Successfully"
                ]);
            } else {
                $ebook = EbookSubscription::updateOrCreate(['member_id' => $request->member_id, "ebook_id" => $request->ebook_id], $request->all());
                $book = EbookLimitModel::where("ebook_id", $request->ebook_id)->first();
                if ($book) {
                    EbookLimitModel::where("ebook_id", $request->ebook_id)->update(["count" => $book->count + 1]);
                } else {
                    EbookLimitModel::create(['ebook_id' => $request->ebook_id, 'count' => 1]);
                }
                return response()->json([
                    'data' => $ebook,
                    'message' => !$request->renew ? "Ebook Subscribe Successfully" : "Ebook Renewed Successfully"
                ]);
            }
        } elseif ($site_name == "http://rashtramatakasturba.smartcitylibrary.com") {
            if ($library_id == "111") {
                $ebook = EbookSubscription2::updateOrCreate(['member_id' => $request->member_id, "ebook_id" => $request->ebook_id], $request->all());
                $book = EbookLimitModel2::where("ebook_id", $request->ebook_id)->first();
                if ($book) {
                    EbookLimitModel2::where("ebook_id", $request->ebook_id)->update(["count" => $book->count + 1]);
                } else {
                    EbookLimitModel2::create(['ebook_id' => $request->ebook_id, 'count' => 1]);
                }
                return response()->json([
                    'data' => $ebook,
                    'message' => !$request->renew ? "Ebook Subscribe Successfully" : "Ebook Renewed Successfully"
                ]);
            } else if ($library_id == 222) {
                $ebook = EbookSubscription3::updateOrCreate(['member_id' => $request->member_id, "ebook_id" => $request->ebook_id], $request->all());
                $book = EbookLimitModel3::where("ebook_id", $request->ebook_id)->first();
                if ($book) {
                    EbookLimitModel3::where("ebook_id", $request->ebook_id)->update(["count" => $book->count + 1]);
                } else {
                    EbookLimitModel3::create(['ebook_id' => $request->ebook_id, 'count' => 1]);
                }
                return response()->json([
                    'data' => $ebook,
                    'message' => !$request->renew ? "Ebook Subscribe Successfully" : "Ebook Renewed Successfully"
                ]);
            } else {
                $ebook = EbookSubscription::updateOrCreate(['member_id' => $request->member_id, "ebook_id" => $request->ebook_id], $request->all());
                $book = EbookLimitModel::where("ebook_id", $request->ebook_id)->first();
                if ($book) {
                    EbookLimitModel::where("ebook_id", $request->ebook_id)->update(["count" => $book->count + 1]);
                } else {
                    EbookLimitModel::create(['ebook_id' => $request->ebook_id, 'count' => 1]);
                }
                return response()->json([
                    'data' => $ebook,
                    'message' => !$request->renew ? "Ebook Subscribe Successfully" : "Ebook Renewed Successfully"
                ]);
            }
        } else {
            if ($library_id == "222") {
                $ebook = EbookSubscription2::updateOrCreate(['member_id' => $request->member_id, "ebook_id" => $request->ebook_id], $request->all());
                $book = EbookLimitModel2::where("ebook_id", $request->ebook_id)->first();
                if ($book) {
                    EbookLimitModel2::where("ebook_id", $request->ebook_id)->update(["count" => $book->count + 1]);
                } else {
                    EbookLimitModel2::create(['ebook_id' => $request->ebook_id, 'count' => 1]);
                }
                return response()->json([
                    'data' => $ebook,
                    'message' => !$request->renew ? "Ebook Subscribe Successfully" : "Ebook Renewed Successfully"
                ]);
            } else if ($library_id == 333) {

                $ebook = EbookSubscription3::updateOrCreate(['member_id' => $request->member_id, "ebook_id" => $request->ebook_id], $request->all());
                $book = EbookLimitModel3::where("ebook_id", $request->ebook_id)->first();
                if ($book) {
                    EbookLimitModel3::where("ebook_id", $request->ebook_id)->update(["count" => $book->count + 1]);
                } else {
                    EbookLimitModel3::create(['ebook_id' => $request->ebook_id, 'count' => 1]);
                }
                return response()->json([
                    'data' => $ebook,
                    'message' => !$request->renew ? "Ebook Subscribe Successfully" : "Ebook Renewed Successfully"
                ]);
            } else {
                $ebook = EbookSubscription::updateOrCreate(['member_id' => $request->member_id, "ebook_id" => $request->ebook_id], $request->all());
                $book = EbookLimitModel::where("ebook_id", $request->ebook_id)->first();
                if ($book) {
                    EbookLimitModel::where("ebook_id", $request->ebook_id)->update(["count" => $book->count + 1]);
                } else {
                    EbookLimitModel::create(['ebook_id' => $request->ebook_id, 'count' => 1]);
                }
                return response()->json([
                    'data' => $ebook,
                    'message' => !$request->renew ? "Ebook Subscribe Successfully" : "Ebook Renewed Successfully"
                ]);
            }
        }
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\MembershipPlan;
use Exception;
use Illuminate\Http\Request;

class DeleteMemberShipPlan extends Controller
{
    public function deletePlan($id)
    {
        try {
            $result = MembershipPlan::where("id", $id)->delete();
            return response()->json([
                'data' => $result,
                "message" => "Plan deleted successfully."
            ]);
        } catch (Exception $error) {
            return response()->json([
                'data' => $error->getMessage(),
                "message" => $error->getMessage()
            ]);
        }
    }
}

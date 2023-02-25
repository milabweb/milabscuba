<?php

namespace App\Http\Controllers\Order;

use App\Models\Dashboard\Category;
use App\Models\Order\Customer;
use App\Models\Order\Orders;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

class OrderController extends BaseController
{
    public function get(Request $request)
    {
        $responseData = array();
        $responseData['customer'] = Customer::where('callphone', $request['callphone'])->first();
        if (!empty($responseData['customer'])) {
            $responseData['customerOrders'] = Orders::where('customer_id', $responseData['customer']['id'])->get();
        } else {
            $responseData['customerOrders'] = [];
        }
        return response()->json($responseData);
    }

}

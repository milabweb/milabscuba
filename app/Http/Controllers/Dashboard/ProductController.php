<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Dashboard\Product;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

class ProductController extends BaseController
{
    public function list()
    {
        $responseData = array();
        $responseData['total'] = Product::where('is_active', 1)->get()->count();
        $responseData['data'] = Product::where('is_active', 1)->get();
        return response()->json($responseData);
    }

    public function edit($id)
    {
        if ($id >= 1) {
            $responseData = Product::find($id);

        } else {
            $responseData = Product::find(0);
            $responseData['id'] = 0;
        }
        return response()->json($responseData);
    }

    public function update(Request $request)
    {
        $id = $request->id;
        if ($id == 0) {
            $item = new Product;
        } else {
            $item = Product::find($id);
        }
        if (!empty($request['name']))
            $item['name'] = $request['name'];
        if (!empty($request['dine_in']))
            $item['dine_in'] = $request['dine_in'];
        if (!empty($request['delivery']))
            $item['delivery'] = $request['delivery'];
        if (!empty($request['description']))
            $item['description'] = $request['description'];
        if (!empty($request['short']))
            $item['short'] = $request['short'];
        if (!empty($request['tax']))
            $item['tax'] = $request['tax'];
        if (!empty($request['stock']))
            $item['stock'] = $request['stock'];
        if (!empty($request['is_active']))
            $item['is_active'] = $request['is_active'];

        $item->save();
        return response()->json($item);
    }

    public function stockUpdate(Request $request)
    {
        $responseData = [];
        $id = $request->id;
        $item = Product::find($id);
        $item['stock'] = $request['stock'];
        $item->save();
        $responseData['status'] = 'success';
        return response()->json($responseData);
    }
}

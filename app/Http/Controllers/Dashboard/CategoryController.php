<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Dashboard\Category;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

class CategoryController extends BaseController
{
    public function list()
    {
        $responseData = array();
        $responseData['total'] = Category::all()->count();
        $responseData['data'] = Category::all();
        return response()->json($responseData);
    }


    public function edit($id)
    {
        if ($id >= 1) {
            $responseData = Category::find($id);

        } else {
            $responseData = Category::find(0);
            $responseData['id'] = 0;
        }
        return response()->json($responseData);
    }

    public function update(Request $request)
    {
        $id = $request->id;
        if ($id == 0) {
            $item = new Category;
        } else {
            $item = Category::find($id);
        }
        if (!empty($request['name']))
            $item['name'] = $request['name'];
        if (!empty($request['description']))
            $item['description'] = $request['description'];
        if (!empty($request['short']))
            $item['short'] = $request['short'];
        if (!empty($request['is_active']))
            $item['is_active'] = $request['is_active'];

        $item->save();
        return response()->json($item);
    }

    public function productList($id)
    {
        $item = Category::where('id', $id)->with(['products'])->first();
        return response()->json($item);
    }
}

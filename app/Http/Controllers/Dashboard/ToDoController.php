<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Dashboard\Product;
use App\Models\Dashboard\ToDo;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

class ToDoController extends BaseController
{
    public function list()
    {
        $responseData = array();
        $responseData['total'] = ToDo::all()->count();
        $responseData['data'] = ToDo::all();
        return response()->json($responseData);
    }
    public function add(Request $request){

        $item = new ToDo;
        $item['description']=$request['description'];
        $item->save();
        $responseData = array();
        $responseData['total'] = ToDo::all()->count();
        $responseData['data'] = ToDo::all();
        return response()->json($responseData);
    }
    public function delete($id){
        $item = ToDo::find($id);
        $item->delete();
        $responseData = array();
        $responseData['total'] = ToDo::all()->count();
        $responseData['data'] = ToDo::all();
        return response()->json($responseData);
    }
//todo ahmet add ve delete işlemleri yapılacak
}

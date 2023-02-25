<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Dashboard\ProductController;
use App\Http\Controllers\Dashboard\CategoryController;
use App\Http\Controllers\Dashboard\ToDoController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::prefix('/api')->group(function () {
    Route::prefix('/product')->group(function () {

        Route::get('/list', [
                ProductController::class,
                'list'
            ]
        );
        Route::get('/edit/{id}', [
                ProductController::class,
                'edit'
            ]
        );
        Route::post('/update', [
                ProductController::class,
                'update'
            ]
        );
        Route::prefix('/stock')->group(function () {
            Route::post('/update', [
                    ProductController::class,
                    'stockUpdate'
                ]
            );
        });
    });
    Route::prefix('/category')->group(function () {

        Route::get('/list', [
                CategoryController::class,
                'list'
            ]
        );
        Route::get('/edit/{id}', [
                CategoryController::class,
                'edit'
            ]
        );
        Route::post('/update', [
                CategoryController::class,
                'update'
            ]
        );
        Route::get('/products/{id}', [
                CategoryController::class,
                'productList'
            ]
        );
    });
    Route::prefix('/todo')->group(function () {

        Route::get('/list', [
                ToDoController::class,
                'list'
            ]
        );
        Route::post('/add', [
                ToDoController::class,
                'add'
            ]
        );
        Route::get('/delete/{id}', [
                ToDoController::class,
                'delete'
            ]
        );
    });
});
Route::get('/dashboard/{any?}', function () {
    return view('dashboard');
}
)->where('any', '^(?!api\/)[\/\w\.-]*');

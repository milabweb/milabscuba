<?php

namespace App\Models\Dashboard;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class ProductCategory extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;


    protected $table = 'product_category';
    protected $appends = ['productDetail'];

    public function getProductDetailAttribute()
    {
//        return $this->attributes['admin'] === 'yes';
        return Product::find($this->attributes['product_id']);
    }

}

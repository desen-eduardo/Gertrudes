<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::create([
            'name_product'=>'ACETATO DE MEDROXIPROGESTERONA',
            'laboratory'=>'EMS',
            'active_amount_mg'=>'150MG',
            'price'=>150.90
        ]);

        Product::create([
            'name_product'=>'ATENOLOL',
            'laboratory'=>'MEDLEY',
            'active_amount_mg'=>'20MG',
            'price'=>65.85
        ]);

        Product::create([
            'name_product'=>'CLORIDRATO DE PROPRANOLOL',
            'laboratory'=>'NEO QUÍMICA',
            'active_amount_mg'=>'40MG',
            'price'=>70.00
        ]);
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        if (!Schema::hasTable('sales')) {
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->unsignedBigInteger('customer_id');
            $table->foreign('customer_id')->references('id')
                ->on('customers')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->unsignedBigInteger('warehouse_id');
            $table->foreign('warehouse_id')->references('id')
                ->on('warehouses')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->double('tax_rate')->nullable();
            $table->double('tax_amount')->nullable();
            $table->double('discount')->nullable();
            $table->double('shipping')->nullable();
            $table->double('grand_total')->nullable();
            $table->double('received_amount')->nullable();
            $table->double('paid_amount')->nullable();
            $table->integer('payment_type')->nullable();
            $table->text('note')->nullable();
            $table->string('reference_code')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sales');
    }
}
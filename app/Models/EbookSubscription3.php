<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EbookSubscription3 extends Model
{
    use HasFactory;
    protected $connection = 'mysql3';
    protected $table = 'ebook_subscriptions';
    protected $fillable = ['ebook_id', 'member_id', 'issued_on', 'returned_on', 'email','razorpay_payment_id', 'amount'];
}

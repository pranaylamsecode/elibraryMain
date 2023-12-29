<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use App\Mail\TestEmail;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\API\B1\BookAPIController;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Http\Controllers\MailController;
use App\Http\Controllers\PdfController;
use App\Http\Controllers\FirebaseController;


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


Route::get('/download-usercard', [PdfController::class, 'generatePdf']);
Route::get('image-upload', [FileUploadController::class, 'imageUpload'])->name('image.upload');
Route::post('image-upload', [BookAPIController::class, 'addItem'])->name('image.upload.post');
Route::get('firebase-notification', [FirebaseController::class, 'sendNotificationrToUser']);

Route::get('/app', function () {
    return view('Simple');
});

Route::get('/', function () {
    return view('welcome');
});




Route::get('/clear-cache', function () {

    Artisan::call('cache:clear');

    Artisan::call('route:clear');


    Artisan::call('view:clear');

    return "Cache is cleared.";
});

Route::get('/call-migrate', function () {

    Artisan::call('migrate');

    return "Migration ran successfully...";
});


Route::get('send-email', function () {
    $mailData = [
        "name" => "Membership Created.",
        "dob" => "12/12/1990"
    ];

    Mail::to("pranaylamsecode@gmail.com")->send(new TestEmail($mailData));

    dd("Mail Sent Successfully!");
});

Route::get('send-mail2', [MailController::class, 'index']);
Route::get('public_uploads_ebooks/{pdf_name}', function (Request $request) {


    $pdf_name = $request->pdf_name;

    if (file_exists(public_path('uploads/ebooks/' . $pdf_name . '/' . $pdf_name . '.pdf'))) {
        return response()->file(public_path('uploads/ebooks/' . $pdf_name . '/' . $pdf_name . '.pdf'), ['content-type' => 'application/pdf']);
    } else {
        return response()->file(public_path('uploads/ebooks/' . $pdf_name . '/' . $pdf_name . '.PDF'), ['content-type' => 'application/pdf']);
    }
});

Route::get('PDFPreview/{pdf_name}', function (Request $request) {


    $pdf_name = $request->pdf_name;

    if (file_exists(public_path('uploads/PDFPreview/' . $pdf_name))) {
        return response()->file(public_path('uploads/PDFPreview/' . $pdf_name), ['content-type' => 'application/pdf']);
    } else {
        return response()->file(public_path('uploads/PDFPreview/' . $pdf_name), ['content-type' => 'application/pdf']);
    }
});;

// Route::get('public_uploads_ebooks_epub/{pdf_name}', function (Request $request) {
//     $pdf_name = $request->pdf_name;
//     if (file_exists(public_path('uploads/ebooks/' . $pdf_name . '/' . $pdf_name . '.epub'))) {
//         return response()->file(public_path('uploads/ebooks/' . $pdf_name . '/' . $pdf_name . '.epub'), ['content-type' => 'application/epub']);
//     } else {
//         return response()->file(public_path('uploads/ebooks/' . $pdf_name . '/' . $pdf_name . '.epub'), ['content-type' => 'application/epub']);
//     }
// });

include "upgrade.php";

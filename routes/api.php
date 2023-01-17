<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use mikehaertl\pdftk\Pdf;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/getpdf', function (Request $request) {
    try {
        // require_once 'vendor/autoload.php';
        $data = [
            'name_field' => $request->firstName,
            'email_field' => $request->email
        ];
        $pdf = new PDF(public_path().'/test.pdf');
        $pdf->fillForm($data)
        ->flatten()
        ->saveAs(public_path().'/completed/hasil.pdf');
    } catch (\Throwable $th) {
        return response()->json([
            'message' => $th->getMessage(),
        ]);
    }
    return response()->json(['data' => public_path()], 200);
});

Route::post('/switch/lang/{locale}', function ($locale) {
    session()->put('locale', $locale);
    // session(['locale' => $locale]);
    App::setLocale($locale);

    return response()->json(['session' => session('locale')], 200);
});

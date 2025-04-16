<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('createUser',[UsersController::class, 'createUser']);
Route::get('getUsers',[UsersController::class,'listUsers']);
Route::get('/health', function () {
    return response()->json([
        'status' => 'Healthy',
        'timestamp' => now(),
    ], 200); 
});

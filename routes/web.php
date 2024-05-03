<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\LeaveRequestController as AdminLeaveRequestController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\LeaveRequestController;
use App\Http\Middleware\isAdmin;
use App\Http\Middleware\isUser;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
   return redirect()->route('login');
});

Route::get('/dashboard', function () {
     if (auth()->user()->is_admin == 1) {
            return redirect()->intended(route('admin.dashboard', absolute: false));
        }
        return redirect()->intended(route('leave-history.index', absolute: false));
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {

     Route::middleware(isAdmin::class)->prefix('admin')->as('admin.')->group(function () {
        Route::get('/dashboard', [DashboardController::class,'index'])->name('dashboard');
        Route::get('/users',[UserController::class,'index'])->name('users.index');
        Route::post('/users/{user}/update-status', [UserController::class, 'updateStatus'])->name('users.updateStatus');
        Route::post('/users/{user}/update-block-status', [UserController::class, 'updateBlockStatus'])->name('users.update-block-status');

        Route::get('/leave-requests', [AdminLeaveRequestController::class, 'index'])->name('leave-requests.index');
        Route::get('/leave-requests/{leave_request}/edit', [AdminLeaveRequestController::class, 'edit'])->name('leave-requests.edit');
        Route::patch('/leave-requests/{leave_request}/update', [AdminLeaveRequestController::class, 'update'])->name('leave-requests.update');
    });

    Route::middleware(isUser::class)->group(function () {
        Route::resource('leave-history', LeaveRequestController::class)->only(['index', 'create', 'store']);
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

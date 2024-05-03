<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
     public function index()
     {
         return Inertia::render('Admin/Users/index',[
             'users' => User::where('is_admin', 0)->select('id','name','email','status','is_blocked')->get()
         ]);
     }

    public function updateStatus(User $user, Request $request)
    {
        $user->update(['status' => $request->status]);
        return redirect()->back()->with('success', 'User status updated successfully.');
    }
    public function updateBlockStatus(User $user,Request $request)
    {
        $user->update(['is_blocked' => $request->is_blocked]);
        return redirect()->back()->with('success', 'User block status updated successfully.');
    }
}

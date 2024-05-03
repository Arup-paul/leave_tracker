<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\LeaveRequest;
use App\Notifications\LeaveRequestStatusNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;
use Inertia\Inertia;

class LeaveRequestController extends Controller
{
    public function index(Request $request)
    {
         $leaveRequests = LeaveRequest::with('user');
          if ($request->input('status') != 'all' && $request->input('status')){
              $leaveRequests = $leaveRequests->where('status',$request->input('status'));
          }
        $leaveRequests = $leaveRequests->orderBy('id','desc')->get();
        return Inertia::render('Admin/LeaveHistory/index', [
            'leaveRequests' => $leaveRequests,
        ]);
    }

    public function edit(LeaveRequest $leaveRequest)
    {
        return Inertia::render('Admin/LeaveHistory/edit',[
           'leaveRequest' =>  $leaveRequest
        ]);
    }

    public function update(Request $request,LeaveRequest $leaveRequest)
    {
        $request->validate([
            'status' => 'required|in:approved,rejected'
        ]);

        $leaveRequest->update([
            'status' => $request->input('status'),
            'admin_comment' => $request->input('admin_comment')
        ]);


        $leaveRequest->user->notify(new LeaveRequestStatusNotification($leaveRequest));


        return redirect()->back();
    }
}

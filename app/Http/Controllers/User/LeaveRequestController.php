<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\LeaveRequestRequest;
use App\Models\LeaveRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LeaveRequestController extends Controller
{
     public function index(Request $request)
     {
         $leaveRequests = LeaveRequest::where('user_id', auth()->id());
             if ($request->input('status') != 'all' && $request->input('status')){
                 $leaveRequests = $leaveRequests->where('status',$request->input('status'));
             }
         $leaveRequests = $leaveRequests->latest()->get();
         return Inertia::render('Users/LeaveHistory/index', ['leaveRequests' => $leaveRequests]);

     }

     public function create()
     {
         return Inertia::render('Users/LeaveHistory/create');
     }


     public function store(LeaveRequestRequest $request)
     {
         try {
             $data = $request->validated();
             $data['user_id'] = auth()->id();
             LeaveRequest::insert($data);
             return redirect()->route('leave-history.create')->with('success', 'Leave request submitted successfully');
         }catch (\Exception $e) {
             return redirect()->back()->with('error', 'An error occurred');
         }

     }

}

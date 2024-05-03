<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\LeaveRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
     public function index()
     {
         $totalLeaveRequest = LeaveRequest::count();
         $pendingLeaveRequests = LeaveRequest::where('status', 'pending')->count();
         $approvedLeaveRequests = LeaveRequest::where('status', 'approved')->count();
         $rejectedLeaveRequests = LeaveRequest::where('status', 'rejected')->count();
         return Inertia::render('Admin/Dashboard',[
                'totalLeaveRequest' => $totalLeaveRequest,
                'pendingLeaveRequests' => $pendingLeaveRequests,
                'approvedLeaveRequests' => $approvedLeaveRequests,
                'rejectedLeaveRequests' => $rejectedLeaveRequests
         ]);
     }
}

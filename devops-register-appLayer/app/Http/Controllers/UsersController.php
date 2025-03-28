<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log as FacadesLog;

class UsersController extends Controller
{
    /**
     * Function to create users from nextjs frontend
     */
    public function createUser(Request $request)
    {
        FacadesLog::info($request);
        // Validate the incoming request
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
        ]);

        // Create the user
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
        ]);

       // FacadesLog::info($request);

        // Return response
        return response()->json([
            'message' => 'User created successfully',
            'user' => $user
        ], 201);
    }

    /**
     * Function to create users from nextjs frontend
     */
   public function listUsers(){
       $users = User::all();
       return response()->json($users);
    }
}

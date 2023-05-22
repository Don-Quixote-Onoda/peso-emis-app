<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Redirect;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
            'is_activate' => 0
        ]);

        event(new Registered($user));

        return Redirect::route('admin-users');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $user = User::find($request->id);
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'role' => $request->role
        ]);
        
        if(gettype($request->password) !== "NULL")
        {
            $user->password = Hash::make($request->password);
            $user->save();
        }

        return Redirect::route('admin-users');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        User::find($request->user_id)->delete();
        return Redirect::route('admin-users');
    }

    public function activate(Request $request) {
        $user = User::find($request->id);
        $user->is_activated = 1;
        $user->save();
        return Redirect::route('admin-users');
    }
}

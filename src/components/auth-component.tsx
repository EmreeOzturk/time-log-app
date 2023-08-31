"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
export default function AuthComponent() {
    const supabase = createClientComponentClient();

    const handleLogin = () => {
        supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: `${location.origin}/auth/callback`,
            },
        });
    };

    return (
        <div className="flex flex-col items-center justify-center text-center h-80vh">
            <div className="max-w-xl my-6">
                <p>
                    Recording time is tracing the path of life; understanding the worth of every moment and leaving a meaningful legacy for the future.
                </p>
            </div>
            <div><Button onClick={handleLogin}>Login with github</Button></div>
        </div>
    );
}
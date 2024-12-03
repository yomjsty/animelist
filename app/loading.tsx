import { Loader2 } from "lucide-react"
import React from 'react'

const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <Loader2 className="animate-spin" />
        </div>
    )
}

export default Loading
'use client'

import { useState, useEffect} from "react"

export function useEditMode() {
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        const stored = localStorage.getItem("editMode")
        if (stored === "true") setEditMode(true)
    }, [])

    useEffect(() => {
        localStorage.setItem("editMode", String(editMode))
    }, [editMode])

    return [editMode, setEditMode] as const
}
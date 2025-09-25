/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAlluser } from "../store/slice/userSlice"
import { removeListener } from '@reduxjs/toolkit';
export default function StudentManager() {
    const result = useSelector((data) => {
        console.log("data", data);

    })
    const dispatch: any = useDispatch()
    useEffect(() => {
        dispatch(getAllUser())
    }, [])
    return (
        <div>
            <h2>Quan li user</h2>
            <ul>
                <li>
                    Quang Vinh <button onClick={removeListener}>Xóa </button>
                </li>
                <li>
                    Lê thanh tùng <button onClick={addEventListener}> Thêm</button>
                </li>
            </ul>
        </div>
    )
}
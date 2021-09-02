import { Card, CardContent, CardHeader, Link } from '@material-ui/core';
import * as React from "react";

const Dashboard = () => (
    <Card>
        <CardHeader title="Welcome to Demo Project - Library Management" />
        <CardContent>
            <h3>Main features</h3>
            <ul>
                <li>Add, show, and edit book details
                </li>
                <li>Add new subjects</li>
                <li>Add new visitors</li>
                <li>Handle checkouts of books
                    <ul>
                        <li>Assign a book to a visitor; due date by default is 30 days</li>
                        <li>Update the return date of an entry</li>
                    </ul>
                </li>
            </ul>
            <hr />
            <h3>Source Code</h3>
            <ul>
                <li>Front-end: &nbsp;
                    <Link href="https://github.com/zhanlun/react-admin-library-management" target="_blank">
                        https://github.com/zhanlun/react-admin-library-management
                    </Link>
                </li>
                <li>Back-end: &nbsp;
                    <Link href="https://github.com/zhanlun/spring-demo-library-management" target="_blank">
                        https://github.com/zhanlun/spring-demo-library-management
                    </Link>
                </li>
            </ul>
        </CardContent>
    </Card>
);

export default Dashboard;
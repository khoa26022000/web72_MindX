
import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router';

const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button onClick={()=>navigate("/auth/login")} type="primary">Back to login page</Button>}
        />
    )
};
export default NotFoundPage;
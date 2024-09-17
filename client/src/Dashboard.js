import React from 'react';
import FlippingNumber from './FlippingNumber';
import './Dashboard.css'; // We'll create this CSS file next

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dashboard-item">
                <h2>Patients</h2>
                <FlippingNumber targetNumber={150} intervalSpeed={50} />
            </div>
            <div className="dashboard-item">
                <h2>Photos</h2>
                <FlippingNumber targetNumber={121} intervalSpeed={50} />
            </div>
            <div className="dashboard-item">
                <h2>Countries</h2>
                <FlippingNumber targetNumber={75} intervalSpeed={50} />
            </div>
        </div>
    );
}

export default Dashboard;

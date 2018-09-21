import React from 'react';
import './Why.css';

class Why extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <h2 className="display-4 mb-6 mt-3">โปรดักและบริการ</h2>
                    <div className="card-deck">
                        <div className="card mb-3 mt-3">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <i className="fa fa-home" aria-hidden="true"></i>
                                </h5>
                                <p className="card-text">GloBuild จะช่วยคุณค้นหาช่างรับเหมาที่มีคุณภาพ สำหรับทุกงานต่อเติมและปรับปรุงบ้าน พร้อมรับสิทธิพิเศษ</p>
                            </div>
                        </div>
                        <div className="card mb-3 mt-3">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <i className="fa fa-users" aria-hidden="true"></i>
                                </h5>
                                <p className="card-text">เรามีสมาชิกช่างรับเหมา ให้บริการงานก่อสร้างแก่เจ้าของบ้าน</p>
                            </div>
                        </div>
                        <div className="card mb-3 mt-3">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </h5>
                                <p className="card-text">ผลงานคุณภาพ พร้อมรีวิว จากผู้ใช้งานจริง</p>
                            </div>
                        </div>
                        <div className="card mb-3 mt-3">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <i className="fa fa-comments" aria-hidden="true"></i>
                                </h5>
                                <p className="card-text">เราขอเป็นสื่อกลาง ระหว่างเจ้าของบ้าน และ ช่างรับเหมา</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-deck">
                        <div className="card mb-3 mt-3">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
                                </h5>
                                <p className="card-text">
                                    งานต่อเติม ที่หลากหลายประเภท เพื่อให้ตรงกับความต้องการของคุณ
                                </p>
                            </div>
                        </div>
                        <div className="card mb-3 mt-3">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <i className="fa fa-tint" aria-hidden="true"></i>
                                </h5>
                                <p className="card-text">
                                    งานทาสีตกแต่งโดยช่างมืออาชีพ พร้อมการออกแบบสีที่คุณประทับใจ
                                </p>
                            </div>
                        </div>
                        <div className="card mb-3 mt-3">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <i className="fa fa-linode" aria-hidden="true"></i>
                                </h5>
                                <p className="card-text">
                                    บิวท์อินเฟอร์นิเจอร์
                                    ปูพื้นลามิเนต / กระเบื้องยาง / ไม้เอ็นจิเนียร์
                                </p>
                            </div>
                        </div>
                        <div className="card mb-3 mt-3">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <i className="fa fa-bolt" aria-hidden="true"></i>
                                </h5>
                                <p className="card-text">
                                    เดินระบบไฟฟ้า / ระบบประปา / กล้องวงจรปิดและอื่นๆ อีกมากมาย
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Why;
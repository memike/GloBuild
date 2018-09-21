import React from 'react';
import './FirstContent.css';
import CountDown from './CountDown';

class FirstContent extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-left mb-3">
                            <p>สร้างบ้าน ต่อเติม รับเหมา รีโนเวท นึกถึงเรา GloBuild</p>
                            <h1 className="display-4">คุณกำลังมองหาช่างรับเหมา ?</h1>
                            <p className="lead">GloBuild จะช่วยคุณค้นหาช่างรับเหมาที่มีคุณภาพและน่าเชื่อถือ</p>
                            <form className="form-group">
                                <div className="form-group">
                                    <input type="email" className="form-control" id="email" placeholder="Email" />
                                </div>
                                <div className="form-group form-check">
                                    <div className="form-group">
                                        <input type="checkbox" className="form-check-input" id="check1" />
                                        <label className="form-check-label">ฉันเป็นผู้มองหา</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" className="form-check-input" id="check/" />
                                        <label className="form-check-label">ฉันเป็นผู้รับเหมา</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-warning btn-md">ลงทะเบียน</button>
                            </form>
                        </div>
                        <div className="col-md-6 text-center">
                            <CountDown />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstContent;
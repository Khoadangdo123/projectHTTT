import React, { useEffect } from 'react';
import StyleHeader from './style.module.css';
import PageLich from '../picture/lich.png';

const styleHeader = {
	display: 'flex',
	justifyContent: 'space-between',
	width: '100%',
	height: 40,
};

const styleTitle = {
	height: 30,
	width: '100%'
};

const styleImage = {
	width: 100,
	height: 80
};

const styleSelectOne = {
	width: 220,
	height: 25,
	marginLeft: 10
}

const styleSelectTwo = {
	width: 210,
	height: 25,
}

const styleSelectThree = {
	width: 250,
	height: 25,
	marginLeft: 4
}

const styleSelectValue = {
	marginLeft: 10,
	height: 25
}

const styleTextSpan = {
	marginTop: 10
}

const Header = () => {

	const dateNow = new Date();
	const currentYear = dateNow.getFullYear();
	const previousYear = dateNow.getFullYear() - 1;
	useEffect(() => {

	}, []);

	return (
		<div>
			<header>
				<div
					style={styleHeader}
					className={`${StyleHeader.title_header_router}`}
				>
					<div className={`${StyleHeader.font_style}`}>
						<p>
							trang chu
						</p>
					</div>
					<div className={`${StyleHeader.font_style}`}>
						<p>
							dang ky mon hoc
						</p>
					</div>
					<div className={`${StyleHeader.font_style}`}>
						<p>
							xem tkb
						</p>
					</div>
					<div className={`${StyleHeader.font_style}`}>
						<p>
							lich thi
						</p>
					</div>
					<div className={`${StyleHeader.font_style}`}>
						<p>
							xem diem
						</p>
					</div>
					<div className={`${StyleHeader.font_style}`}>
						<p>
							xem cttdt
						</p>
					</div>
				</div>
				<div 
					style={styleTitle}
					className={`${StyleHeader.title_header}`}
				>
					Thông Tin Thời Khóa Biểu
					<div style={{
						display: 'flex',
						marginTop: 10
					}}>
						<div>
							<img
								style={styleImage}
								src={PageLich} 
								alt=""
							/>
						</div>
						<div style={styleSelectValue}>
							<div>
								<label htmlFor="">Chọn học kỳ xem TKB :</label>
								<select style={styleSelectOne} name="" id="">
									<option value={`Học Kỳ 1 - Năm học ${previousYear}-${currentYear}`}>Học Kỳ 1 - Năm học 2022-2023</option>
									<option value={`Học Kỳ 2 - Năm học ${previousYear}-${currentYear}`}>Học Kỳ 2 - Năm học 2022-2023</option>
									<option value={`Học Kỳ 1 - Năm học ${previousYear}-${currentYear}`}>Học Kỳ 1 - Năm học 2022-2023</option>
									<option value={`Học Kỳ 2 - Năm học ${previousYear}-${currentYear}`}>Học Kỳ 2 - Năm học 2022-2023</option>
								</select>
							</div>
							<div style={{
								display: 'flex',
								marginTop: 10
							}}>
								<div>
									<select style={styleSelectTwo} name="" id="">
										<option value={`TKB học kỳ cá nhân`}>TKB học kỳ cá nhân</option>
										<option value={`TKB toàn trường`}>TKB toàn trường</option>
									</select>
								</div>
								<div>
									<select style={styleSelectThree} name="" id="">
										<option></option>
										<option></option>
									</select>
								</div>
								<button style={{
									marginLeft: 10
								}}>IN TKB</button>
							</div>
							<div style={styleTextSpan}>
								<span>
								( Lưu ý: Mỗi ký tự trong dãy tuần 1234567890 đại diện cho 1 tuần lễ, ký tự đầu tiên diễn tả tuần thứ nhất của học kỳ (tuần 1) bắt đầu từ ngày 06/02/2023) ...
								</span>
							</div>
						</div>
					</div>
					<div
						style={{
							display: 'flex',
							float: 'right'
						}}
					>
						<div style={{
							marginRight: 80
						}}>
							<input type="checkbox" id="sortSemester" name="sortSemester" />
							<label htmlFor='sortSemester'>Sắp xếp theo thứ tiết </label>
						</div>
						<div>
							<input type="checkbox" id="sortSemester" name="sortSemester" />
							<label htmlFor='sortSemester'>Sắp xếp theo thứ tiết </label>
						</div>
					</div>
				</div>
			</header>
		</div>
	)
}

export { Header };

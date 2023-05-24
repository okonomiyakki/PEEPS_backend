import { db } from '../config/dbconfig';

// const userQuery = `INSERT INTO user (user_id, user_name, user_password, user_nickname, verify, user_location, user_img, delete_flag, deleted_at) VALUES
// ('user13', '테스트', 'pwd1234', '테스트닉네임', DEFAULT, '서울시 성동구', DEFAULT, DEFAULT, DEFAULT)`;

const userQuery = `INSERT INTO user (user_id, user_name, user_password, user_nickname, verify, user_location, user_img, delete_flag, deleted_at) VALUES
('admin1', '관리자1', 'pwd4321', '운영자1', 'admin', '서울시 성동구', DEFAULT, DEFAULT, DEFAULT),
('admin2', '관리자2', 'pwd4321', '운영자2', 'admin', '서울시 성동구', DEFAULT, DEFAULT, DEFAULT),
('user1', '김민철', 'pwd1234', '민철', DEFAULT, '서울시 성동구', DEFAULT, DEFAULT, DEFAULT),
('user2', '이승연', 'pwd1234', '승연', DEFAULT, '서울시 성동구', DEFAULT, DEFAULT, DEFAULT),
('user3', '박민지', 'pwd1234', '민지', DEFAULT, '서울시 성동구', DEFAULT, DEFAULT, DEFAULT),
('user4', '최민수', 'pwd1234', '민수', DEFAULT, '서울시 성동구', DEFAULT, DEFAULT, DEFAULT),
('user5', '한영호', 'pwd1234', '영호', DEFAULT, '서울시 성동구', DEFAULT, DEFAULT, DEFAULT),
('user6', '장지원', 'pwd1234', '지원', DEFAULT, '서울시 성동구', DEFAULT, DEFAULT, DEFAULT),
('user7', '윤지은', 'pwd1234', '지은', DEFAULT, '서울시 성동구', DEFAULT, DEFAULT, DEFAULT),
('user8', '성유진', 'pwd1234', '유진', DEFAULT, '서울시 성동구', DEFAULT, DEFAULT, DEFAULT),
('user9', '양은지', 'pwd1234', '은지', DEFAULT, '서울시 성동구', DEFAULT, DEFAULT, DEFAULT),
('user1DEFAULT', '유준형', 'pwd1234', '준형', DEFAULT, '서울시 성동구', DEFAULT, DEFAULT, DEFAULT),
('user11', '임지훈', 'pwd1234', '지훈', DEFAULT, '서울시 성동구', DEFAULT, DEFAULT, DEFAULT),
('user12', '송기훈', 'pwd1234', '기훈', DEFAULT, '서울시 성동구', DEFAULT, DEFAULT, DEFAULT);`;

const reviewQuery = `INSERT INTO review (review_id, location_id, user_id, review_content, star_rating, created_at, review_img) VALUES 
(DEFAULT, '1953249219', 'user1', '진료가 너무 최악이었어요.', 1, DEFAULT, DEFAULT),
(DEFAULT, '1953249219', 'user2', '진료가 별로였어요.', 2, DEFAULT, DEFAULT),
(DEFAULT, '1953249219', 'user3', '진료가 그냥 그랬어요.', 3, DEFAULT, DEFAULT),
(DEFAULT, '1953249219', 'user4', '진료가 마음에 들었어요.', 4, DEFAULT, DEFAULT),
(DEFAULT, '1953249219', 'user5', '진료가 최고였어요!', 5, DEFAULT, DEFAULT),
(DEFAULT, '1953249219', 'user6', '의사선생님이 친절해요!', 5, DEFAULT, DEFAULT),
(DEFAULT, '1953249219', 'user7', '병원비가 저렴해요!', 5, DEFAULT, DEFAULT),
(DEFAULT, '1953249219', 'user8', '강아지가 좋아했어요!', 5, DEFAULT, DEFAULT),
(DEFAULT, '5678', 'user10', '강아지 털이 깔끔하게 잘라줬어요!', 4, DEFAULT, DEFAULT),
(DEFAULT, '2468', 'user11', '다양한 애견용품이 있어서 좋았어요!', 5, DEFAULT, DEFAULT),
(DEFAULT, '1357', 'user12', '강아지랑 함께 커피한잔 하기에 딱 좋은 곳이에요!', 4, DEFAULT, DEFAULT),
(DEFAULT, '3691', 'user2', '강아지와 함께 산책하기 좋은 장소입니다!', 4, DEFAULT, DEFAULT),
(DEFAULT, '7894', 'user3', '진료하는 동물병원 중에 가격이 저렴한 곳입니다.', 3, DEFAULT, DEFAULT),
(DEFAULT, '9512', 'user4', '토이푸들 털이 예뻐서 다음에도 방문할 예정입니다!', 4, DEFAULT, DEFAULT),
(DEFAULT, '7539', 'user5', '애견음식이 너무 진부합니다.', 2, DEFAULT, DEFAULT),
(DEFAULT, '6541', 'user6', '펫플레이트를 먹어보았는데, 강아지가 정말 좋아했습니다.', 3, DEFAULT, DEFAULT),
(DEFAULT, '7953', 'user7', '좋은 날씨에 강아지와 산책하기에 딱 좋은 공원입니다.', 5, DEFAULT, DEFAULT);`;

const postQuery = `INSERT INTO post (post_id, user_id, post_category, post_title, post_content, post_img, created_at) VALUES
(DEFAULT, 'user1', '일상', '반려견과 함께하는 달콤한 일상', '반려견과 함께하는 달콤한 일상을 즐겨봅시다.', DEFAULT, DEFAULT),
(DEFAULT, 'user2', '일상', '강아지를 위한 꿀팁', '강아지를 키우면서 도움이 되는 꿀팁을 알려드립니다.', DEFAULT, DEFAULT),
(DEFAULT, 'user3', '일상', '강아지 용품 사용법', '강아지 용품의 사용법을 제대로 알아봅시다.', DEFAULT, DEFAULT),
(DEFAULT, 'user4', '일상', '강아지와 함께하는 가을 나들이', '강아지와 함께하는 가을 나들이 코스를 소개합니다.', DEFAULT, DEFAULT),
(DEFAULT, 'user5', '일상', '강아지의 건강을 지켜주는 예방접종', '강아지의 건강을 지키기 위한 예방접종에 대해 알아봅시다.', DEFAULT, DEFAULT),
(DEFAULT, 'user6', '일상', '려견과 함께하는 겨울 레저 활동', '반려견과 함께하는 겨울 레저 활동을 즐길 수 있는 방법을 알아봅시다.', DEFAULT, DEFAULT),
(DEFAULT, 'user7', '정보공유', '강아지의 건강한 식습관을 유지하는 방법', '강아지의 건강을 지키기 위한 올바른 식습관을 유지하는 방법을 알아봅시다.', DEFAULT, DEFAULT),
(DEFAULT, 'user8', '정보공유', '강아지 교육의 기본, 시간과 인내', '강아지 교육에서 가장 중요한 것은 시간과 인내입니다.', DEFAULT, DEFAULT),
(DEFAULT, 'user9', '정보공유', '반려견을 위한 건강한 야외생활', '반려견이 건강하게 야외생활을 즐길 수 있도록 주의할 점을 알아봅시다.', DEFAULT, DEFAULT),
(DEFAULT, 'user10', '정보공유', '강아지와 함께하는 여름 레저 활동', '강아지와 함께하는 여름 레저 활동을 즐길 수 있는 방법을 알아봅시다.', DEFAULT, DEFAULT),
(DEFAULT, 'user11', '정보공유', '강아지가 좋아하는 스낵 추천', '강아지가 좋아하는 스낵을 소개합니다.', DEFAULT, DEFAULT),
(DEFAULT, 'user12', '내 새꾸 자랑', '강아지의 스트레스 해소법', '강아지의 스트레스를 해소할 수 있는 방법을 알아봅시다.', DEFAULT, DEFAULT);`;

const petQuery = `INSERT INTO pet (pet_id, pet_name, pet_gender, pet_species, pet_birth, pet_info, pet_img, user_id) VALUES
(DEFAULT, '초코', '1', '시츄', '2023-05-25', '산책을 좋아해요', DEFAULT, 'user1'),
(DEFAULT, '감자', '2', '시츄', '2023-05-25', '산책을 좋아해요', DEFAULT, 'user2'),
(DEFAULT, '쿠키', '1', '말티즈', '2023-05-25', '산책을 좋아해요', DEFAULT, 'user3'),
(DEFAULT, '해피', '2', '말티즈', '2023-05-25', '산책을 좋아해요', DEFAULT, 'user4'),
(DEFAULT, '체리', '1', '시바', '2023-05-25', '산책을 좋아해요', DEFAULT, 'user5'),
(DEFAULT, '루나', '2', '시바', '2023-05-25', '산책을 좋아해요', DEFAULT, 'user6'),
(DEFAULT, '블루', '1', '치와와', '2023-05-25', '산책을 좋아해요', DEFAULT, 'user7'),
(DEFAULT, '베리', '2', '치와와', '2023-05-25', '산책을 좋아해요', DEFAULT, 'user8'),
(DEFAULT, '코코', '1', '불독', '2023-05-25', '산책을 좋아해요', DEFAULT, 'user9'),
(DEFAULT, '무지', '2', '불독', '2023-05-25', '산책을 좋아해요', DEFAULT, 'user10'),
(DEFAULT, '만두', '1', '휘핏', '2023-05-25', '산책을 좋아해요', DEFAULT, 'user11'),
(DEFAULT, '피치', '2', '휘핏', '2023-05-25', '산책을 좋아해요', DEFAULT, 'user12');`;

const commentQuery = `INSERT INTO comment (comment_id, post_id, user_id, comment_content, created_at) VALUES 
(DEFAULT, '10', 'user1', '좋은 정보 감사합니다.', DEFAULT),
(DEFAULT, '10', 'user2', '강아지와 함께하는 일상이 너무 좋아요!', DEFAULT),
(DEFAULT, '10', 'user3', '강아지 교육에 대한 내용도 알차게 쓰셨네요.', DEFAULT),
(DEFAULT, '10', 'user4', '강아지 용품 사용법에 대해 자세히 알려주셔서 감사합니다.', DEFAULT),
(DEFAULT, '11', 'user5', '강아지와 함께하는 가을 나들이 추천 감사합니다!', DEFAULT),
(DEFAULT, '11', 'user6', '강아지 건강에 대한 정보 공유 감사합니다.', DEFAULT),
(DEFAULT, '11', 'user7', '강아지 스트레스 해소 방법에 대해 알려주셔서 감사합니다.', DEFAULT),
(DEFAULT, '11', 'user8', '강아지를 키우면서 도움이 되는 꿀팁 감사합니다.', DEFAULT),
(DEFAULT, '12', 'user9', '강아지와 함께하는 달콤한 일상이 너무 좋아요!', DEFAULT),
(DEFAULT, '12', 'user10', '강아지의 건강을 지켜주는 예방접종에 대한 정보 감사합니다.', DEFAULT),
(DEFAULT, '12', 'user11', '강아지와 함께하는 여름 레저 활동 추천 감사합니다!', DEFAULT),
(DEFAULT, '12', 'user12', '강아지가 좋아하는 스낵 추천 감사합니다.', DEFAULT);`;

// const insertDummyUsers = async () => {
//   try {
//     await db.query('DELETE FROM user');
//     const [result, _]: any = await db.query(userQuery);
//     console.log('Success inserting dummy Users!, Insert Info: ', result.info);
//   } catch (error) {
//     console.log('Error inserting dummy Users: ', error);
//   }
// };

const insertDummyReviews = async () => {
  try {
    await db.query('DELETE FROM review');
    await db.query('ALTER TABLE review AUTO_INCREMENT = 1'); // 더미데이터 초기회할때는 AI 1부터 다시 시작
    const [result, _]: any = await db.query(reviewQuery);
    console.log('Success inserting dummy Reviews!, Insert Info: ', result.info);
  } catch (error) {
    console.log('Error inserting dummy Reviews: ', error);
  }
};

const insertDummyPosts = async () => {
  try {
    await db.query('DELETE FROM post');
    await db.query('ALTER TABLE post AUTO_INCREMENT = 1'); // 더미데이터 초기회할때는 AI 1부터 다시 시작
    const [result, _]: any = await db.query(postQuery);
    console.log('Success inserting dummy Posts!, Insert Info: ', result.info);
  } catch (error) {
    console.log('Error inserting dummy Posts: ', error);
  }
};

const insertDummyPets = async () => {
  try {
    await db.query('DELETE FROM pet');
    await db.query('ALTER TABLE pet AUTO_INCREMENT = 1'); // 더미데이터 초기회할때는 AI 1부터 다시 시작
    const [result, _]: any = await db.query(petQuery);
    console.log('Success inserting dummy Pets!, Insert Info: ', result.info);
  } catch (error) {
    console.log('Error inserting dummy Pets: ', error);
  }
};

const insertDummyComments = async () => {
  try {
    await db.query('DELETE FROM comment');
    await db.query('ALTER TABLE comment AUTO_INCREMENT = 1'); // 더미데이터 초기회할때는 AI 1부터 다시 시작
    const [result, _]: any = await db.query(commentQuery);
    console.log('Success inserting dummy Comments!, Insert Info: ', result.info);
  } catch (error) {
    console.log('Error inserting dummy Comments: ', error);
  }
};

export {
  // insertDummyUsers,
  insertDummyReviews,
  insertDummyPosts,
  insertDummyPets,
  insertDummyComments,
};

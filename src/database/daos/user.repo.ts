import { dataSource, db } from '../../config/dbconfig';
import { User, UserProfile } from '../models';

// userId 입력시 password,verify,delete_flag 제외한 user 정보 추출
export const findOne = async (userId: string): Promise<UserProfile> => {
  try {
    const getColumns = 'user_id, user_name, user_nickname, location_user, user_img';
    const [row]: any = await db.query(
      `
    SELECT ${getColumns}
    FROM user
    WHERE user_id = ?`,
      [userId]
    );
    return row;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// userId 입력시 user 정보 추출
export const findAllInfo = async (userId: string): Promise<User> => {
  try {
    const [row]: any = await db.query(
      `
    SELECT *
    FROM user
    WHERE user_id = ?`,
      [userId]
    );
    return row[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 유저 추가
export const createUser = async (
  inputData: Record<string, string | number | boolean>
): Promise<User> => {
  try {
    const newColumns = 'user_id, user_name, user_password, user_nickname, location_user, user_img';
    const newValues = Object.values(inputData)
      .map((value) => (typeof value === 'string' ? `'${value}'` : value))
      .join(', ');
    const [newUser]: any = await db.query(
      `
          INSERT INTO user (${newColumns})
          VALUES (${newValues})
      `
    );
    console.log(newUser); // Todo: newUser 반환 불가!
    console.log(inputData.user_id);
    console.log(typeof inputData.user_id);
    const createUserId = String(inputData.user_id);

    const createuser = await findAllInfo(createUserId);

    return createuser;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

// update의 경우 key값과 value값을 매칭 시켜줌
export const updateDataTrans = (input: Record<string, string | number | boolean>) => {
  const data = Object.entries(input).reduce(
    (a, [key, value]) => {
      a[0].push(`${key} = ?`);
      a[1].push(value);
      return a;
    },
    [[], []] as [string[], Array<string | number | boolean>]
  );
  return data;
};

// 유저 정보 수정 >> Todo: 프론트와 상의 후 어떤 것을 수정 가능하게 할지 정하기!
export const update = async (
  userId: string,
  updateData: Record<string, string | number>
): Promise<User> => {
  try {
    const [keys, values] = updateDataTrans(updateData);
    const [updateUser, _]: any = await db.query(
      `
          UPDATE user
          SET ${keys.join(', ')}
          WHERE user_id = ?
      `,
      [...values, userId]
    );
    console.log(updateUser);
    const updateuser = await findAllInfo(userId);
    console.log(updateuser);
    return updateuser;
  } catch (error) {
    console.log(error);
    return Promise.reject(error); // App Error
  }
};

// 유저 정보 소프트 delete
export const softDelete = async (userId: string): Promise<User> => {
  try {
    const [updateUser]: any = await db.query(
      `
          Update user
          SET delete_flag ='1'
          WHERE user_id = ?`,
      [userId]
    );

    const user = await findAllInfo(userId);
    console.log(user);
    console.log(updateUser);
    return user;
  } catch (error) {
    console.log(error);
    return Promise.reject(error); // App Error
  }
};

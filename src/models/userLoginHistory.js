import query from "../dbConnections";
import { multipleColumnSet } from "../utils/dbUtil";
//import Role from "../utils/userRoles.utils";

class UserLoginHistory {
  tableName = "LOGIN_HISTORY";

  create = async ({ userName, userDevice }) => {
    const sql = `INSERT INTO ${this.tableName}
    (USER_ID, LOGIN_DTM, LOGIN_DEVICE) VALUES (?,sysdate(),?)`;

    const result = await query(sql, [userName, userDevice]);
    const affectedRows = result ? result.affectedRows : 0;

    return affectedRows;
  };
}

export default new UserLoginHistory();

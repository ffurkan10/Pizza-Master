import React from "react";
import Styles from "./styles.module.scss";
import Image from "next/image";

const Users = ({ data }) => {
  return (
    <div className="container">
      <ul className={Styles.users}>
        <h1>Yönetim Kadrosu</h1>
        {data?.map((data) => (
          <li className={Styles.userList}>
            <div className={Styles.imageBox}>
              <img src={data?.image} />
              <h5>
                {data?.firstName} {data?.lastName}
              </h5>
              <p>{data?.email}</p>
            </div>

            <div className={Styles.userText}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                laboriosam quas molestias quis illum quasi adipisci laborum
                magni sapiente. Et, optio deserunt! Earum quae a mollitia
                voluptatibus saepe eaque error delectus veritatis reiciendis
                odit libero sunt quas exercitationem id, nemo dolorum corrupti
                excepturi dolores fugit pariatur nam omnis! Quas, perspiciatis.
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

"use client";

import { useState } from "react";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";

import { User } from "@/ui/icons/User";
import { CaretDown } from "@/ui/icons/CaretDown";

import { ButtonLink } from "../Button";
import { Popover } from "../Popover";

export function Item(props) {
  const { item, styles } = props;
  const user = JSON.parse(props.user);

  const [isPopoverActive, setIsPopoverActive] = useState(false);

  const { title, type, url } = item;

  const firstName = user?.firstName;
  const lastName = user?.lastName;
  const firstEmail = user?.emailAddresses[0]?.emailAddress;
  const username = `${firstName} ${lastName}` || firstEmail;

  if (type === "button-alt") {
    if (!user) {
      return (
        <Link href={url || ""} className={styles["nav-login"]}>
          <User className={styles["nav-login-icon"]} />
          <span>{title}</span>
        </Link>
      );
    }
    return (
      <>
        <button
          className={styles["nav-logged"]}
          type="button"
          onClick={() => setIsPopoverActive(true)}
        >
          <User className={styles["nav-logged-icon"]} />
          {username}
          <CaretDown className={styles["nav-logged-icon"]} />
        </button>
        <Popover
          isOpen={isPopoverActive}
          handlePopover={() => setIsPopoverActive(false)}
          className={styles["nav-popover"]}
          classNameClose={styles["nav-popover-close"]}
        >
          <ul className={styles["nav-logged-list"]}>
            <li className={styles["nav-logged-item"]}>
              <Link href="/dashboard" className={styles["nav-logged-link"]}>
                Ir al dashboard
              </Link>
            </li>
            <li className={styles["nav-logged-item"]}>
              <SignOutButton>
                <button type="button" className={styles["nav-logged-link"]}>
                  Salir
                </button>
              </SignOutButton>
            </li>
          </ul>
        </Popover>
      </>
    );
  }

  if (type === "button") {
    return (
      <ButtonLink href={url || ""} size="small">
        {title}
      </ButtonLink>
    );
  }

  return (
    <Link href={url || ""} className={styles["nav-link"]}>
      {title}
    </Link>
  );
}

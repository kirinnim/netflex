"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import Logo from "@/assets/svg/logo.svg";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";
import AuthButton from "./AuthButton";

function Header() {
  return (
    <header className="h-20 px-8 flex justify-between items-center">
      {/* 로고 */}
      <Link href="/" className="text-red-600 font-extrabold text-3xl">
        <Image src={Logo.src} width={120} height={100} alt="netflix" />
      </Link>
      <div>
        <AuthButton />
      </div>
    </header>
  );
}

export default Header;

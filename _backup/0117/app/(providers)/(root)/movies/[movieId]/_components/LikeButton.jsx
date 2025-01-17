"use client";

import Modal from "@/components/Modal";
import { useAuth } from "@/contexts/AuthContext";
import { useModal } from "@/contexts/ModalContext";
import { useState } from "react";
import LoginModal from "../../../_components/LoginModal";
import clsx from "clsx";
import Button from "@/components/Button";

function LikeButton() {
  const { isLoggedIn } = useAuth();
  const [isLiked, setIsLiked] = useState(false);
  const modal = useModal();
  const label = isLiked ? "찜 풀기" : "찜하기";

  const handleClick = () => {
    if (!isLoggedIn) return modal.open(<LoginModal />);

    if (isLiked) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      intent={isLiked ? "white" : "primary"}
      className={"w-full mt-4"}
    >
      {label}
    </Button>
  );
}

export default LikeButton;

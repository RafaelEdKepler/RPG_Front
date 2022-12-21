import Tippy from "@tippyjs/react";
import { Message } from "./style";

interface ToolTipProps {
  text: string,
  delay?: number,
  color?: string,
  children: any
}

export default function ToolTip({ text, delay, color, children }: ToolTipProps) {

  return (
    <Tippy
      delay={delay ? delay : 600}
      content={<Message color={color}><span>{text}</span></Message>}
    >
      {children}
    </Tippy>
  )
}
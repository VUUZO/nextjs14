import { Toggle } from "../ui/toggle"
import { Item } from "./MenuBar"

export const MenuItem = ({
  Icon, title, action, isActive = false
}: Item) => {
  return (
    <Toggle
      size={"xs"}
      pressed={isActive}
      onPressedChange={action}
      title={title}
      className={`${isActive ? 'text-primary-500 dark:text-primary-500/70' : ''} `}
    >
      <Icon />
    </Toggle>
  )
}
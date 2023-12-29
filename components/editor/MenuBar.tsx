import { Fragment } from "react"
import { MenuItem } from "./MenuItem"
import { Editor } from "@tiptap/react"
import { Bold, Braces, Code, Heading1, Heading2, Highlighter, Italic, List, ListOrdered, MessageSquareQuote, Pilcrow, Quote } from "lucide-react"

export interface Item {
  Icon: () => React.ReactNode
  title: string
  action: () => void
  isActive: boolean
}

export const MenuBar = ({ editor }: { editor: Editor }) => {
  const items: Item[] = [
    {
      Icon: () => <Bold className="editor-icon" />,
      title: 'Bold',
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive('bold'),
    },
    {
      Icon: () => <Italic className="editor-icon" />,
      title: 'Italic',
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive('italic'),
    },
    {
      Icon: () =>  <Braces className="editor-icon" />,
      title: 'Code',
      action: () => editor.chain().focus().toggleCode().run(),
      isActive: editor.isActive('code'),
    },
    {
      Icon: () =>  <Heading1 className="editor-icon" />,
      title: 'Heading 1',
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: editor.isActive('heading', { level: 1 }),
    },
    {
      Icon: () =>  <Heading2 className="editor-icon" />,
      title: 'Heading 2',
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: editor.isActive('heading', { level: 2 }),
    },
    {
      Icon: () =>  <Pilcrow className="editor-icon" />,
      title: 'Paragraph',
      action: () => editor.chain().focus().setParagraph().run(),
      isActive: editor.isActive('paragraph'),
    },
    {
      Icon: () =>  <List className="editor-icon" />,
      title: 'Bullet List',
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive('bulletList'),
    },
    {
      Icon: () =>  <ListOrdered className="editor-icon" />,
      title: 'Ordered List',
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive('orderedList'),
    },
    {
      Icon: () =>  <Code className="editor-icon" />,
      title: 'Code Block',
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: editor.isActive('codeBlock'),
    },
    {
      Icon: () =>  <Quote className="editor-icon" />,
      title: 'Blockquote',
      action: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: editor.isActive('blockquote'),
    },
  ]

  return (
    <div className="flex flex-wrap gap-1 xs:gap-2 py-[9px] px-[9px] xs:px-[21px] background-light900_dark300 border-b light-border-2 text-light-400">
      {
        items.map((item, i) => (
          <Fragment key={i}>
            { <MenuItem {...item} /> }
          </Fragment>
        ))
      }
    </div>
  )
}
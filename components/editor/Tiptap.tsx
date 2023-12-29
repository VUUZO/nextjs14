'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import Highlight from '@tiptap/extension-highlight'
import StarterKit from '@tiptap/starter-kit'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import { MenuBar } from './MenuBar'
import Heading from '@tiptap/extension-heading'

export const Tiptap = ({ onChange }: { onChange: (richText: string) => void }) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: 'prose dark:prose-invert text-dark300_light800'
      }
    },
    extensions: [
      StarterKit.configure({ history: false }),
      Highlight,
      TaskList,
      TaskItem,
      Heading.configure({
        HTMLAttributes: {
          class: 'text-xl font-bold',
          levels: [1, 2]
        },
      })
    ],
    onUpdate({ editor }) {
      onChange(editor.getHTML())
    },
  })

  return (
    <div className='w-full border light-border-2 rounded-md bg-light-800 dark:bg-dark-200 overflow-hidden min-h-[216px] flex flex-col'>
      {editor && <MenuBar editor={editor} />}
      <EditorContent editor={editor} className='p-6 h-full flex-1 text-dark300_light800'/>
    </div>
  )
}

export default Tiptap
'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import Highlight from '@tiptap/extension-highlight'
import StarterKit from '@tiptap/starter-kit'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import { MenuBar } from './MenuBar'
import Heading from '@tiptap/extension-heading'
import CodeBlock from '@tiptap/extension-code-block'

export const Tiptap = ({ onChange }: { onChange: (richText: string) => void }) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: 'prose dark:prose-invert text-dark300_light800 focus:outline-none min-h-[150px]',
      },
    },
    extensions: [
      StarterKit.configure({
        history: false,
        code: {
          HTMLAttributes: {
            class: 'code',
          }
        }
      }),
      Highlight,
      TaskList,
      TaskItem,
      CodeBlock.configure({
        HTMLAttributes: {
          class: 'code-block',
        }
      }),
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
    <div
      className='border w-full light-border-2 rounded-md bg-light-800 dark:bg-dark-200 overflow-hidden flex flex-col'
    >
      { editor && <MenuBar editor={editor} /> }
      <EditorContent editor={editor} className='editor__conrent p-6 flex-1 text-dark300_light800'/>
    </div>
  )
}

export default Tiptap
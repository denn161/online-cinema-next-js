import { ContentState, EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import styles from './Form.module.scss'
import { ITextEditor } from './form-interface'
import { Editor } from 'react-draft-wysiwyg'

const TextEditor = ({ onChange, value, placeholder, error }: ITextEditor) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty())

	const [isUpdated, setIsUpdated] = useState(false)

	const options={
		options: ['inline', 'blockType', 'list'],
		inline: {
			inDropdown: false,
			className: undefined,
			component: undefined,
			dropdownClassName: undefined,
			options: ['bold', 'italic', 'underline', 'strikethrough'],
		},
		blockType: {
			inDropdown: false,
			options: [],
		},
		list: {
			inDrodown: false,
			options: ['unordered', 'ordered'],
		},
	}

	useEffect(() => {
		if (isUpdated) return

		const defaultValue = value || ''

		const blocksFromHtml = htmlToDraft(defaultValue)

		const contateState = ContentState.createFromBlockArray(
			blocksFromHtml.contentBlocks,
			blocksFromHtml.entityMap
		)
		const newEditorState = EditorState.createWithContent(contateState)

		setEditorState(newEditorState)
	}, [isUpdated, value])

	const onChangeEditorState = (editor: EditorState) => {
		setIsUpdated(true)
		setEditorState(editor)

		return onChange(draftToHtml(convertToRaw(editor.getCurrentContent())))
	}

	return <div 
	className={cn(styles.common,styles.text__wrapper,'animate-fade')}	
	>
		<label>
			<span className={styles.text__placeholder}>{placeholder}</span>
			<div className={styles.text__container}>
        <Editor
				 editorState={editorState}
				 toolbarClassName={styles.toolbar}
				 editorClassName={styles.editor} 
				 onEditorStateChange={onChangeEditorState}
				 spellCheck
				 toolbar={options}
				  
				/>
			</div>
			{error && <div className={styles.error}>{error.message}</div>}
		</label>
	</div>
}

export default TextEditor

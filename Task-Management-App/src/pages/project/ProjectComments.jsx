import React, { useState } from 'react'
import { useAuthContext } from './../../hooks/useAuthContext';
import { timestamp } from '../../firebase/config';
import { useFirestore } from '../../hooks/useFirestore';
import Avatar from './../../components/avatar/Avatar';
import './projectComments.css'
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const ProjectComments = ({project}) => {

    const [newComment, setNewComment] = useState('')
    const { updateDocument, response } = useFirestore('projects')
    const {user} = useAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const commentToAdd = {
            displayName: user.displayName,
            photoURL: user.photoURL,
            content: newComment,
            createdAt: timestamp.fromDate(new Date()),
            id: Math.random()
        }
        await updateDocument(project.id, {
            comments: [...project.comments, commentToAdd]
        })
        if (!response.error){
            setNewComment('')
        }
    }

  return (
    <div className='project-comments'>
        <h4>Project Comments</h4>
        <ul>
            {project.comments.length > 0 && project.comments.map(comment => (
                <li key={comment.id}>
                    <div className="comment-author">
                        <Avatar src={comment.photoURL}/>
                        <p>{comment.displayName}</p>
                    </div>
                    <div className='comment-date'>
                        <p>{formatDistanceToNow(comment.createdAt.toDate(), { addSuffix: true})}</p>
                    </div>
                    <div className='comment-content'>
                        {comment.content}
                    </div>
                </li>
            ))}
        </ul>
        <form onSubmit={handleSubmit} >
            <label>
                <span>Add new Comment:</span>
                <textarea  required onChange={(e) => setNewComment(e.target.value)} value={newComment}></textarea>
            </label>
            <button className="btn">Add Comment</button>
        </form>
    </div>
  )
}

export default ProjectComments
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import UseEffectComponentWithCleanup from './UseEffectComponentWithCleanup'

function UseEffectComponent() {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('posts')
  const [postList, setPostList] = useState([])
  const tabs = ['posts', 'comments', 'albums']

  useEffect(() => {
    document.title = title
  })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((post) => setPostList(post))
  }, [type])

  interface postI {
    id: string
    title?: string
    name?: string
  }

  return (
    <div style={{ marginTop: '2%' }}>
      <UseEffectComponentWithCleanup></UseEffectComponentWithCleanup>
      {tabs.map((tab: string) => (
        <Button
          key={tab}
          style={
            type === tab
              ? {
                  color: 'white',
                  backgroundColor: 'black'
                }
              : {}
          }
          onClick={() => setType(tab)}
        >
          {tab}
        </Button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul style={{ color: 'white' }}>
        {postList.map((post: postI) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UseEffectComponent

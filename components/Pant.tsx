import React, { useState } from 'react'
import Router from "next/router";
import { create, all } from 'mathjs'


export type PantProps = {
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
	measurements: {
		waistCircum: number | null,
		hipsCircum: number
	}
};

const Pant: React.FC<{ pant: PantProps }> = ({ pant }) => {
	const [waistCircum, setWaistCircum] = useState('')
 	const [hipsCircum, setHipsCircum] = useState('')

	const submitData = async (e: React.SyntheticEvent) => {
		e.preventDefault()
		try {
			const body = { waistCircum, hipsCircum }
			await fetch('api/post', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			})
		} catch (error) {
			console.error(error)
		}
	}
	
	const config = { }
	const math = create(all, config)

	console.log(math.sqrt(-4).toString()) // 2i

	var totalCircum = (waistCircum , hipsCircum) => {
			waistCircum + hipsCircum 
	}

	var diffCircum = () => {
		(waistCircum , hipsCircum) =>  waistCircum - hipsCircum 
	}

  return (
    <div>
			<form onSubmit={submitData}>
				<h1>Brand new sewing model</h1>
				<input
					autoFocus
					onChange={(e) => setHipsCircum(e.target.value)}
					placeholder="Hips circumference"
					type="number"
					min="20"
					max="120"
					value={hipsCircum}
				/>
				<input
					onChange={(e) => setWaistCircum(e.target.value)}
					placeholder="Waist circumference"
					type="number"
					min="20"
					max="120"
					value={waistCircum}
				/>
				<h4> Total is {math.sum(waistCircum,hipsCircum).toString()} </h4>
				<h4> Difference is {math.evaluate( hipsCircum - waistCircum ).toString()} </h4>
				<input disabled={!hipsCircum  || !waistCircum  } type="submit" value="Create" />
				<a className="back" href="#" onClick={() => Router.push('/')}>
					or Cancel
				</a>
			</form>   
			<h4>
				Waist circumference is &nbsp;
				{waistCircum ? waistCircum + " inches" : "unknown, please supply" }
				
			</h4>
			<h4>
				Hips circumference is &nbsp;
				{ hipsCircum ? hipsCircum + " inches" : "unknown, please supply" }
				
			</h4>
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Pant;

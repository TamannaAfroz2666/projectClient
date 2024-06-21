"use client"
import React, { useState } from 'react';

const Skills = () => {
    return (
        <div>
            <div>
                <h1 className=' text-[1.5rem] uppercase tracking-[.5rem] leading-[1.4rem] text-[#ffffff] font-semibold pt-16 '>skills</h1>
                <hr className='w-32 mt-4' />
            </div>
            <div>
                <p className='text-[#ffffff] text-[18px] py-2'> <strong className=' tracking-[.1rem]'>1. Software & Tools:</strong> Tableau, PyCharm, Anaconda, Git, GitHub, Excel, MySQL, PostgreSQL, Oracle, Microsoft SQL Server.</p>
                <p className='text-[#ffffff] text-[18px] py-2'> <strong className=' tracking-[.1rem]'>2. Big Data Technologies:</strong> SQL and relational database, Apache Hadoop.</p>
                <p className='text-[#ffffff] text-[20px] py-2 '><strong className=' tracking-[.1rem]'>3. Cloud Technologies: </strong> Microsoft Azure, Google Cloud Platform.</p>
                <p className='text-[#ffffff] text-[18px] py-2'> <strong className=' tracking-[.1rem]'>4. Programming Languages:</strong> Python, R. </p>
                <p className='text-[#ffffff] text-[18px] py-2'> <strong className=' tracking-[.1rem]'>5.Machine Learning:</strong> Supervised (Linear Regression, Logistic Regression, Decision Tree, Random Forest), Unsupervised(Clustering, Dimensionality Reduction), Neural Networks (Feedforward, Convolutional, Recurrent), Support Vector Machines, K-Nearest Neighbors, Naive Bayes, Ensemble Learning.</p>
                <p className='text-[#ffffff] text-[18px] py-2 '> <strong className=' tracking-[.1rem]'>6.Machine Learning Tools/Libraries:</strong> TensorFlow,scikit-learn, or PyTorch.</p>
                <p className='text-[#ffffff] text-[18px] py-2 '> <strong className=' tracking-[.1rem]'>7.Statistics:</strong> Statistical Analysis, Data Interpretation, Data Modeling and Forecasting.</p>
                <p className='text-[#ffffff] text-[18px] py-2 '> <strong className=' tracking-[.1rem]'>8.Soft Skills:</strong> Communication Skills, Collaboration, CommunicationSkills,Leadership, Time Management, Independent and Flexible, problem solving, Consistent, Adaptability, Motivation, Multi tasker, Teamwork, Proactive.</p>
            </div>


        </div>
    );
};

export default Skills;
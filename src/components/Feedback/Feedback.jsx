import React from 'react';
import { Link } from 'react-router-dom';
import comment from '../../assets/comment.jpg';

const Feedback = () => {
    return (
      <div>
        <div>
          <form>
            <div className="hero min-h-screen">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2 flex flex-col justify-center items-center gap-10">
                  <h3 className="text-2xl text-center mt-5">
                    Share your Feedback & Suggestions
                  </h3>
                  <img className="lg:w-9/12" src={comment} alt="" />
                  <Link to="/" className="my-btn">
                    Go Home
                  </Link>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl">
                  <div className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <p className="label-text">
                          Name <span className="text-red-600">*</span>
                        </p>
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="input input-bordered bg-white"
                        name="name"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <p className="label-text">
                          Email <span className="text-red-600">*</span>
                        </p>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter email"
                        className="input input-bordered bg-white"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <p className="label-text">Photo</p>
                      </label>
                      <input
                        type="file"
                        className="file-input file-input-bordered w-full max-w-md bg-white"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <p className="label-text">
                          Messages <span className="text-red-600">*</span>
                        </p>
                      </label>
                      <textarea
                        className="text-base textarea textarea-bordered bg-white"
                        placeholder="write your messages"
                        required
                      ></textarea>
                    </div>
                    <div className="form-control">
                      <p className='text-xs mt-3 text-gray-400'>
                        NB: This may be used as testimonials with your name or
                        alias
                      </p>
                    </div>
                    <div className="form-control mt-6">
                      <input
                        type="submit"
                        value="Submit"
                        name="submit"
                        className="my-btn btn"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Feedback;
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { projectFormSchema, type ProjectFormData } from '@/lib/validations';
import { services } from '@/lib/data';

export default function StartProject() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      projectType: [],
    },
  });

  const onSubmit = async (data: ProjectFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Here you would typically send the data to your API
      console.log('Form data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitMessage({
        type: 'success',
        message: 'Thank you for your submission! We will get back to you soon.',
      });
      reset();
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
        Let&apos;s collaborate to build something <span className="text-orange-600">extraordinary</span> together.
      </h1>

      <div className="md:p-6 bg-white md:border rounded-lg">
        <p className="text-sm text-gray-500 mb-5">
          <span className="text-red-600">*</span> All fields are mandatory.
        </p>

        {/* Display Messages */}
        {submitMessage && (
          <div className={`mb-4 p-3 rounded ${
            submitMessage.type === 'success' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {submitMessage.message}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
          {/* Your Details */}
          <div>
            <h2 className="font-semibold mb-2 cursor-default">Your Details <span className="text-red-600">*</span></h2>
            <div className="flex flex-col gap-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  {...register('name')}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register('email')}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  {...register('phone')}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Company / Organisation Name"
                  {...register('company')}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.company && (
                  <p className="text-red-600 text-sm mt-1">{errors.company.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Project Type */}
          <div>
            <h2 className="font-semibold mb-2 cursor-default">Type of services <span className="text-red-600">*</span></h2>
            <p className="text-sm text-gray-500 mb-2">Select all that apply</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {services.map((service, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={service.title}
                    {...register('projectType')}
                    className="form-checkbox h-5 w-5 accent-blue-950"
                  />
                  <span>{service.title}</span>
                </label>
              ))}
            </div>
            {errors.projectType && (
              <p className="text-red-600 text-sm mt-1">{errors.projectType.message}</p>
            )}
          </div>

          {/* Project Description */}
          <div>
            <h2 className="font-semibold mb-2 cursor-default">Tell us something <span className="text-red-600">*</span></h2>
            <textarea
              placeholder="Describe your project..."
              {...register('description')}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 h-32"
            />
            {errors.description && (
              <p className="text-red-600 text-sm mt-1">{errors.description.message}</p>
            )}
          </div>

          {/* Referral Source */}
          <div>
            <h2 className="font-semibold mb-2 cursor-default">How did you hear about us? <span className="text-red-600">*</span></h2>
            <input
              type="text"
              placeholder="LinkedIn / Facebook / By another source"
              {...register('referral')}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.referral && (
              <p className="text-red-600 text-sm mt-1">{errors.referral.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full text-lg text-white py-3 rounded ${
              isSubmitting 
                ? 'cursor-not-allowed bg-blue-950 opacity-70' 
                : 'bg-orange-600 hover:bg-blue-950'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'SUBMIT'}
          </button>
        </form>
      </div>
    </section>
  );
}

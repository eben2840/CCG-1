import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { careerRoles } from '@/lib/page-content';
import { CareersPage } from '@/components/pages/careers-page';
vi.mock('@/lib/page-content', () => ({ careerRoles: [] }));
afterEach(() => { cleanup(); careerRoles.splice(0); });
describe('Career opportunities', () => {
 it('shows an honest empty state without invented vacancies', () => {
  render(<CareersPage/>);
  expect(screen.getByText('No open roles are currently listed.')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Introduce yourself/ })).toHaveAttribute('href', expect.stringContaining('mailto:'));
 });
 it('lists confirmed roles, filters them, and opens an application', () => {
  careerRoles.push({id:'test-role',title:'Test confirmed consultant',department:'Advisory',location:'Remote',type:'Full-time',summary:'A test fixture, not a published vacancy.',responsibilities:['Support client engagements.'],requirements:['Relevant consulting experience.']});
  render(<CareersPage/>);
  expect(screen.getByRole('heading', {name:'Test confirmed consultant'})).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText('Search roles or locations'), {target:{value:'unmatched'}});
  expect(screen.getByText('No roles match your search')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', {name:'Clear filters'}));
  fireEvent.click(screen.getByRole('button', {name:/View role/}));
  expect(screen.getByRole('dialog')).toBeInTheDocument();
  expect(screen.getByText('Support client engagements.')).toBeInTheDocument();
  expect(screen.getByRole('link',{name:/Apply by email/})).toHaveAttribute('href',expect.stringContaining('Application%3A'));
 });
});

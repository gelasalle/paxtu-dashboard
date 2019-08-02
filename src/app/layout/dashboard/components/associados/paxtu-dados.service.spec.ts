import { TestBed } from '@angular/core/testing';

import { PaxtuDadosService } from './paxtu-dados.service';

describe('PaxtuDadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaxtuDadosService = TestBed.get(PaxtuDadosService);
    expect(service).toBeTruthy();
  });
});

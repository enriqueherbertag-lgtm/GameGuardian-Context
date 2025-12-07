export interface SessionRequest {
  adultId: string;
  childId: string;
  relationship: 'parent' | 'uncle' | 'cousin' | 'family_friend' | 'teacher';
  game: string;
  maxMinutes: number;
}

export interface Session {
  id: string;
  adultId: string;
  childId: string;
  startTime: Date;
  endTime?: Date;
  status: 'pending' | 'active' | 'completed' | 'alerted';
  alerts: string[];
}

export class SessionService {
  private sessions: Map<string, Session> = new Map();

  async startSupervisedSession(request: SessionRequest): Promise<Session> {
    // 1. Verificar autorización (adulto puede jugar con este niño)
    const isAuthorized = await this.verifyAuthorization(
      request.adultId, 
      request.childId, 
      request.relationship
    );

    if (!isAuthorized) {
      throw new Error('Adulto no autorizado para este niño');
    }

    // 2. Notificar a padres
    await this.notifyParents(request.childId, {
      type: 'session_request',
      adultId: request.adultId,
      relationship: request.relationship,
      game: request.game
    });

    // 3. Crear sesión
    const session: Session = {
      id: this.generateId(),
      adultId: request.adultId,
      childId: request.childId,
      startTime: new Date(),
      status: 'pending',
      alerts: []
    };

    this.sessions.set(session.id, session);

    // 4. Programar check de tiempo
    this.scheduleTimeCheck(session.id, request.maxMinutes);

    return session;
  }

  private async verifyAuthorization(
    adultId: string, 
    childId: string, 
    relationship: string
  ): Promise<boolean> {
    // En producción: consultar base de datos de autorizaciones
    // Por ahora, simular verificación
    return true;
  }

  private async notifyParents(childId: string, notification: any): Promise<void> {
    // Enviar notificación a dashboard/app de padres
    console.log(`Notificación para padres de ${childId}:`, notification);
  }

  private scheduleTimeCheck(sessionId: string, maxMinutes: number): void {
    setTimeout(() => {
      const session = this.sessions.get(sessionId);
      if (session && session.status === 'active') {
        session.alerts.push('Tiempo máximo excedido');
        session.status = 'alerted';
        this.notifyParents(session.childId, {
          type: 'time_exceeded',
          sessionId,
          minutes: maxMinutes
        });
      }
    }, maxMinutes * 60 * 1000);
  }

  private generateId(): string {
    return `sess_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}
